const people = ["Guadalupe", "Ollie", "Aki"];

function writeCards(people) {
    let invitations = [];
    for(let i = 0; i < people.length; i++) {
        invitations.push(`Thank you, ${people[i]}, for the wonderful surprise gift!`)
        console.log(people[i]);
    }
    return invitations;
}

function countDown(n) {
    for(let i = n; i >= 0; i--) {
        console.log(i);
    }
}

countDown(10);
writeCards(people);