var ideas = [
    "Create a recipe sharing platform",
    "Build a virtual reality game about exploring space",
    "Develop a productivity tool for managing tasks",
    "Design a social network for pet lovers",
    "Make an online marketplace for handmade crafts",
    "Build a language learning app with interactive lessons",
    "Create a blog platform for sharing travel experiences",
    "Develop a fitness app for tracking workouts and progress",
    "Design a platform for booking outdoor adventure experiences",
    "Make an app for finding and rating local restaurants",
    "Build a platform for connecting freelance professionals with clients"
];

function generateIdea() {
    var ideaIndex = Math.floor(Math.random() * ideas.length);
    var randomIdea = ideas[ideaIndex];
    document.getElementById("idea").innerText = randomIdea;
}
