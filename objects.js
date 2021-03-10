const poppy = {
    name: 'poppy',
    old: 35
}

class pet {
    name = String;
    old = Number;

    constructor(name, old) {
        this.name = name;
        this.old = old;
    }
}

const Poppy = new pet('Poppy', 3)

console.log(poppy)
console.log(Poppy)

const { old } = poppy
console.log(old)

const web = {
    name: 'Google',
    link: {
        link: 'www.google.com'
    },
    socialwebs: {
        youtube: {
            name: 'youtube',
            link: 'www.youtube.com'
        }
    }
}
const { name, link } = web.socialwebs.youtube
console.log(name, link)