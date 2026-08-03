document.addEventListener("DOMContentLoaded", async function () {
    await Promise.all([
        home(),
        about(),
        skills(),
        projects(),
        experience(),
        certificates(),
        contact()
    ]);
    initApp();
});

async function home() {
    const response = await fetch("views/home.html");
    const html = await response.text();
    document.getElementById("home").innerHTML = html;
}

async function about() {
    const response = await fetch("views/about.html");
    const html = await response.text();
    document.getElementById("about").innerHTML = html;
}

async function skills() {
    const response = await fetch("views/skills.html");
    const html = await response.text();
    document.getElementById("skills").innerHTML = html;
}

async function projects() {
    const response = await fetch("views/projects.html");
    const html = await response.text();
    document.getElementById("projects").innerHTML = html;
}

async function experience() {
    const response = await fetch("views/experience.html");
    const html = await response.text();
    document.getElementById("experience").innerHTML = html;
}

async function certificates() {
    const response = await fetch("views/certificates.html");
    const html = await response.text();
    document.getElementById("certificates").innerHTML = html;
}

async function contact() {
    const response = await fetch("views/contact.html");
    const html = await response.text();
    document.getElementById("contact").innerHTML = html;
}