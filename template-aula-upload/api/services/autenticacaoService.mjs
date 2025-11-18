import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { usuarioRespository } from "../repository/usuarioRespository.mjs";
import 'dotenv/config'

const AutenticacaoService = () => {
  const SECRET_KEY = process.env.SECRET_KEY || '238293829382'

  const createJWT = (payload) => {
    const options = { expiresIn: "1h" };
    return jwt.sign(payload, SECRET_KEY, options);
  };

  const isPermited = req =>(
      (req.path === '/api/usuarios' ||
        req.path === '/api/usuarios/login' ||
        req.path.split('/').some(el => el.includes('imagens'))) &&
      req.method === 'POST' || req.method === 'GET'
    )

  const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];

     if(isPermited(req)){
        return next();
      }
    if (!token) return res.status(403).send();

    jwt.verify(token.replace("Bearer ", ""), SECRET_KEY, (err, decoded) => {
      if (err) return res.status(401).send();
      req.userId = decoded.id;
      next();
    });
  };

  const descriptografarPayload = async (req,res,next) => {
    const token = req.headers["authorization"];
    try {
      if(isPermited(req)){
        return next();
      }
      const decoded = jwt.verify(token.replace("Bearer ", ""), SECRET_KEY);
      req.usuarioId = decoded.id;
      req.usuarioEmail = decoded.email;
      next();
    } catch (err) {
      throw new Error("Invalid or expired token.");
    }
  };

  const login = async (req, res) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    try {
      const user = await usuarioRespository.findByUser({ email });
      

      if (!user) {
        return res.status(401).json({ error: "Invalid credentials." });
      }

      const isPasswordValid = await compare(senha, user.senha);
      
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials." });
      }

      const token = createJWT({ id: user.id, email: user.email });
      return res.status(200).json({ token, nome:user.nome });
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: err });
    }
  };

  return {
    verifyToken,
    login,
    descriptografarPayload
  };
};


export const autenticacaoService = AutenticacaoService();