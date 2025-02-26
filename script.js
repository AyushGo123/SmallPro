function showSorryPage() {
    document.querySelector('.birthday-page').classList.add('hidden');
    document.querySelector('.sorry-page').classList.remove('hidden');
}

function showSpecialMessage() {
    alert(`Aaj ka din special hai to socha ek senti message likh du... par tu tension mat le zyada senti nahi hone wala😆

On this special day, I want you to know how much you mean to me. 
Life has its moments — both the good and the bad — but through it all, 
your presence has been a blessing. Your kindness, your laughter, and your 
beautiful soul light up not just your world but mine too.

I am truly sorry for anything that hurt you. Please know that my heart 
holds nothing but genuine affection and care for you.
(Esi dost Mile na dobara)
Mujhe maaf kar diya na? Kar diya na? Pakka? 😬 Nahi kiya toh bata ek emotional speech aur likh ke bhej du?

`);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Birthday surprise ready!');
});
