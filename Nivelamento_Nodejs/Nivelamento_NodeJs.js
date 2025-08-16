console.log('-----Ex1-----');

function first(list) {
    return list[0];
}

console.log(first([3,1,2,4,5]));

console.log('-------------\n');


console.log('-----Ex2-----');

function last_three(list) {
    var result = [];

    for (let index = list.length - 1; index > list.length - 4; index--) {
        result.push(list[index]);
    }

    return result;
}

console.log(last_three([1,2,3,4,5]));

console.log('-------------\n');


console.log('-----Ex3-----');

function even(list) {
    var result = 0;

    for (let index = 0; index < list.length; index++) {
        if (list[index] % 2 == 0) {
            result++;
        }    
    }

    return result;
}

console.log(even([1,2,3,4,5,6]));

console.log('-------------\n');


console.log('-----Ex4-----');

function odd(list) {
    var result = 0;

    for (let index = 0; index < list.length; index++) {
        if (list[index] % 2 == 1) {
            result++;
        }
    }

    return result;
}

console.log(odd([1,2,3,4,5,6]));

console.log('-------------\n');


console.log('-----Ex5-----');

function negative(list) {
    var result = [];

    for (let index = 0; index < list.length; index++) {
        if (list[index] < 0) {
            result.push(list[index]);
        }
    }
    
    return result;
}

console.log(negative([-2,3,5,7,-8,-50]));

console.log('-------------\n');

console.log('-----Ex6-----');

function sum(list) {
    var total = 0;

    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    
    return total;
}

console.log(sum([1,2,3]));

console.log('-------------\n');

console.log('-----Ex7-----');

function highest(list) {
    var result = list[0];

    for (let i = 0; i < list.length; i++) {
        if (list[i] > result) {
            result = list[i];
        }
    }

    return result;
}

console.log(highest([14,7,35,2,6,46]));

console.log('-------------\n');

console.log('-----Ex8-----');

function lowest(list) {
    var result = list[0];

    for (let i = 0; i < list.length; i++) {
        if (list[i] < result) {
            result = list[i];
        }
    }

    return result;
}

console.log(lowest([14,7,35,2,6,46]));

console.log('-------------\n');

console.log('-----Ex9-----');

function all_positive(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] < 0) {
            return false;
        }
    }

    return true;
}

console.log(all_positive([1,2,3,4]));

console.log('-------------\n');

console.log('-----Ex10-----');

function num_times(list, value) {
    var num = 0;

    for (let i = 0; i < list.length; i++) {
        if (value == list[i]) {
            num++;
        }
    }

    return num;
}

console.log(num_times([1,2,3,4,5,2,4,6], 6))

console.log('--------------\n');

console.log('-----Ex11-----');

function filter_even(list) {
    var result = [];

    for (let index = 0; index < list.length; index++) {
        if (list[index] % 2 == 0) {
            result.push(list[index]);
        }    
    }

    return result;
}

console.log(filter_even([1,2,3,4,5,6]))

console.log('--------------\n');

console.log('-----Ex12-----');

function filter_odd(list) {
    var result = [];

    for (let index = 0; index < list.length; index++) {
        if (list[index] % 2 == 1) {
            result.push(list[index]);
        }
    }

    return result;
}

console.log(filter_odd([1,2,3,4,5,6]));

console.log('--------------\n');

console.log('-----Ex13-----');

function reverse_array(list) {
    return list.reverse();
}

console.log(reverse_array([1,2,3,4]));

console.log('--------------\n');

console.log('-----Ex14-----');

function has_duplicate(list) {
    var second = [];

    for (let i = 0; i < list.length; i++) {
        if (second.includes(list[i])) {
            return true;
        }
        second.push(list[i]);
    }

    return false;
}

console.log(has_duplicate([1,2,3,4,2]));

console.log('--------------\n');

console.log('-----Ex15-----');

function average(list) {
    var total = 0;

    for (let i = 0; i < list.length; i++) {
        total += list[i]
    }

    return total / list.length;
}

console.log(average([1,2,3,4,5]));

console.log('--------------\n');

console.log('-----Ex16-----');

const filter_higher = (list, value) => {
    return list.filter( (number) => {
        return number >= value;
    } )
}

console.log(filter_higher([10, 20, 30, 40], 25));

console.log('--------------\n');

console.log('-----Ex17-----');

function single_value(list) {
    var result = [];

    for (let i = 0; i < list.length; i++) {
        if (!result.includes(list[i])) {
            result.push(list[i]);
        }
    }

    return result;
}

console.log(single_value([1,1,2,2,3,3,4]));

console.log('--------------\n');

console.log('-----Ex18-----');

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function is_in_order(list) {
    if (!list.every(isNumeric)) {
        return 'Lista Inválida';
    }
    
    for (let i = 1; i < list.length; i++) {
        if (list[i - 1] > list[i]) {
            return false;
        }
    }

    return true;
}

console.log(is_in_order([1,2,3,5,4]));

console.log('--------------\n');

console.log('-----Ex19-----');

function sum_equivalent(list1, list2) {
    if (list1.length != list2.length) {
        return 'Vetores de tamanhos diferentes';
    }

    var result = [];

    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i] + list2[i]);
    }

    return result;
}

console.log(sum_equivalent([1,2,3], [3,2,14]))

console.log('--------------\n');

console.log('-----Ex20-----');

function filter_high(list, value) {
    const sortedList = list.sort((a, b) => b - a);

    return sortedList.slice(0, value);
}

console.log(filter_high([42, 1, 3, 12, 273, 19], 4))

console.log('--------------');