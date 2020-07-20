// Write a function called reverse which accepts a string and returns a new string reversed
// reverse('awesome') -> 'emosewa'
// reverse('rithmschool') -> 'loohcsmhtir'

function reverse(str) {
    let reversed = "";

    function helper(str) {
        if (str.length === 0) return;

        let lastIndex = str.length - 1;

        reversed += str[lastIndex];
        helper(str.slice(0, lastIndex));
    }
    helper(str);
    return reversed;
}

reverse("awesome");
