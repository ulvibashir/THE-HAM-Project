const tabList = [
    "Web Design",
    "Graphic Design",
    "Online Support",
    "App Design",
    "Online Marketing",
    "Seo Service"
];

const imageList = [
    "Images/graphic design/graphic-design6.jpg",
    "Images/graphic design/graphic-design10.jpg",
    "Images/graphic design/graphic-design5.jpg",
    "Images/graphic design/graphic-design12.jpg",
    "Images/graphic design/graphic-design3.jpg",
    "Images/graphic design/graphic-design4.jpg"
];

 
const textList = [
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio explicaboaspernatur harum vel. Et dignissimos illo odit non, minus nesciunt. Numquam nam sapiente possimus facere? Iusto similiquev eniam nam quaerat. Autem nemo labore repudiandae, esse omnis fugit sapiente officiis. Nam debitis ullam repellendus voluptas tempora minima, aliquid odio totam quos.`,
    `At the outset, web designing emerged as an easier and simple way of exchanging information. It was a better means of communication and had better networking benefits compared to the commercial reasons. Later on, the Web became an avenue for making profits, and the information space that was prior for providing free exchange thus changed to a space for commercial transactions.`,
    `There was also need to allow programmers to distribute their software freely and enable people to modify source codes. The current web-based software developers such as PHP, Firefox, WordPress and Linux are thus major contributors to development of modern websites. Open source has consequently had a direct influence on web development and browsing such as flexibility and innovative development initiatives in addition to providing network solutions.`,
    `Development of ‘open source’ receives very little attention especially official concerns by the initial founders for its development. The initial organizations to benefit from the open licensing systems directly included the Department of Defence (DOD), Research Agencies, and the Lab researchers such as National Laboratories (Reece et al, 92). These organizations were the most viable producers, users and beneficiaries of the licensing operation.`,
    `The firms also provided the platform for major advances such as the firewalls, and other network security tools. Open licensing therefore caused firms to merge ideas and integrate development of operating systems and related software to high-tech but inexpensive software/hardware supercomputers to replace the original Pentium-based systems.`,
    `Although departments such as the DOD or Space Agencies may have developed or initiated most of the research into open source, in overall, today’s beneficiaries include commercial agencies. Commercial enterprises such as Netscape, Red Hat, Cygnus, MacAfee and Caldera were quick to realize the opportunities offered by web-based methodologies and begun to offer the open source arrangements.`
];





class Images_filter {
    constructor (image, type) {
        this.image = image;
        this.type = type
    }
}

let FilterImages = [];

for (let i = 1; i <= 12; i++) {
    let item = new Images_filter(`<img src="Images/graphic design/graphic-design${i}.jpg" alt="" class="filter-item" data-type="Graphic">`,`Graphic`);
    FilterImages.push(item);
}
for (let i = 1; i <= 12; i++) {
    let item = new Images_filter(`<img src="Images/web design/web-design${i}.jpg" alt="" class="filter-item" data-type="Web">`,`Web`);
    FilterImages.push(item);
}

for (let i = 1; i <= 12; i++) {
    let item = new Images_filter(`<img src="Images/landing page/landing-page${i}.jpg" alt="" class="filter-item" data-type="Landing">`,`Landing`);
    FilterImages.push(item);
}
for (let i = 1; i <= 12; i++) {
    let item = new Images_filter(`<img src="Images/wordpress/wordpress${i}.jpg" alt="" class="filter-item" data-type="WordPress">`,`WordPress`);
    FilterImages.push(item);
}

