const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        links.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));
        this.classList.add('active');
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

document.getElementById('home').classList.add('active');
document.querySelector('a[href="#home"]').classList.add('active');

const quizQuestions = [
    {
        question: "What is the name of the planet we live on?",
        options: ["Mars", "Earth", "Jupiter", "Venus"],
        answer: "Earth",
        image: "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/04/Untitled-1024-%C3%97-768px-4-1.jpg"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Mercury", "Earth", "Mars", "Venus"],
        answer: "Mercury",
        image: "https://static.toiimg.com/thumb/msid-110227862,width-1070,height-580,imgsize-51994,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
    },
    {
        question: "What do we call the light we see from the Sun?",
        options: ["Moonlight", "Sunlight", "Starlight", "Earthlight"],
        answer: "Sunlight",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45jT6N_MK-UByLDMYJ9NsktS2mFaY6TGYXw&s"
    },
    {
        question: "What is the Moon's relationship with Earth?",
        options: ["It orbits Earth", "It orbits Mars", "It orbits the Sun", "It is Earth's twin"],
        answer: "It orbits Earth",
        image: "https://c02.purpledshub.com/uploads/sites/48/2020/08/Earth-orbit-Sun-7bfd38c.jpg?webp=1&w=1200"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Saturn", "Jupiter", "Earth"],
        answer: "Mars",
        image: "https://starwalk.space/gallery/images/mars-the-ultimate-guide/1920x1080.jpg"
    },
    {
        question: "Which celestial body is the brightest object in the night sky?",
        options: ["The Moon", "Venus", "The North Star", "Mars"],
        answer: "The Moon",
        image: "https://hips.hearstapps.com/hmg-prod/images/moon-quotes-full-moon-over-sea-657a231587aab.jpg"
    },
    {
        question: "What is a group of stars that form a pattern called?",
        options: ["A constellation", "A galaxy", "A nebula", "A planet"],
        answer: "A constellation",
        image: "https://cdn.mos.cms.futurecdn.net/6Jfy7ECAHuosjCcaUyLb3o.jpg"
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Saturn", "Earth", "Mars", "Jupiter"],
        answer: "Saturn",
        image: "https://media.istockphoto.com/id/1362060571/photo/saturn-planet-with-rings-in-outer-space-among-star-dust-and-srars-titan-moon-seen-elements-of.jpg?s=612x612&w=0&k=20&c=egWKDL6RjGAeKuQD6gYksG5CSv4Qn6RA1c_g4DBeLaQ="
    },
    {
        question: "What is the name of the closest star to Earth?",
        options: ["Proxima Centauri", "The Sun", "Sirius", "Alpha Centauri"],
        answer: "The Sun",
        image: "https://static.vecteezy.com/system/resources/previews/016/737/593/non_2x/silhouette-of-the-tree-and-the-sun-in-a-light-orange-yellow-at-sunset-free-photo.jpg"
    },
    {
        question: "What does NASA stand for?",
        options: ["National Aeronautics and Space Administration", "National Air and Space Association", "North American Space Agency", "National Aerospace and Satellite Agency"],
        answer: "National Aeronautics and Space Administration",
        image: "https://plus.nasa.gov/wp-content/uploads/2023/10/N.jpg"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const quiz = quizQuestions[currentQuestion];
    const quizContainer = document.getElementById("quizContainer");
    const quizImage = document.getElementById("quizImage");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    quizImage.src = quiz.image;
    questionElement.innerText = quiz.question;
    optionsElement.innerHTML = '';
    quiz.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(answer) {
    const quizResult = document.getElementById("quizResult");
    const quiz = quizQuestions[currentQuestion];

    if (answer === quiz.answer) {
        score++;
        quizResult.innerText = "Correct!";
    } else {
        quizResult.innerText = `Wrong! The correct answer was: ${quiz.answer}`;
    }

    setTimeout(() => {
        currentQuestion++;
        
        if (currentQuestion < quizQuestions.length) {
            loadQuiz();
        } else {
            displayScore();
        }
    }, 1000);
}

function displayScore() {
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = `<h3>Your final score is: ${score} / ${quizQuestions.length}</h3>`;
    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart Quiz";
    restartButton.addEventListener("click", restartQuiz);
    quizContainer.appendChild(restartButton);
}

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    loadQuiz();
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = '';
}

loadQuiz();

async function fetchJoke() {
    const jokes = [
        {
            setup: "Why did the astronaut break up with his girlfriend?",
            punchline: "Because he needed space."
        },
        {
            setup: "Why don't aliens visit our planet?",
            punchline: "Because they don't want to be caught in a black hole of conversation!"
        },
        {
            setup: "How do you organize a space party?",
            punchline: "You planet!"
        },
        {
            setup: "Why did the sun go to school?",
            punchline: "To get a little brighter."
        },
        {
            setup: "What do you call a space explorer who sings?",
            punchline: "A rocket star."
        },
        {
            setup: "Why was the moon so broke?",
            punchline: "Because it kept going around in circles and never got anywhere."
        },
        {
            setup: "What did the astronaut use to keep his pants up?",
            punchline: "An asteroid belt."
        },
        {
            setup: "What do you call a party on the moon?",
            punchline: "A lunar-tic celebration!"
        },
        {
            setup: "Why don’t space ships ever get lost?",
            punchline: "They always follow the star map!"
        },
        {
            setup: "Why did the astronaut bring a pencil to space?",
            punchline: "Because he wanted to draw a little attention!"
        },
        {
            setup: "What did the alien say to the space traveler?",
            punchline: "Take me to your leader... or at least to a good taco joint!"
        },
        {
            setup: "How do planets stay in touch?",
            punchline: "They send each other space mail."
        },
        {
            setup: "Why don’t space rocks ever gossip?",
            punchline: "Because they keep things on the down-low!"
        },
        {
            setup: "Why did the Earth break up with the Moon?",
            punchline: "It needed some space!"
        },
        {
            setup: "What’s an astronaut’s favorite part of a computer?",
            punchline: "The space bar."
        }
    ];
    
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("joke").innerText = randomJoke.setup + " " + randomJoke.punchline;
    document.getElementById("jokeEmoji").innerText = "😂";
}

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        document.getElementById("weather").innerText = "Please enter a city name.";
        return;
    }

    try {
        const apiKey = '0b55a5b427cd5245783af0009db7b1fb';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById("weather").innerText = "City not found.";
        } else {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            document.getElementById("weather").innerText = `Weather in ${city}: ${weatherDescription}, Temp: ${temperature}°C, Humidity: ${humidity}%`;
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
        document.getElementById("weather").innerText = "Error fetching weather data.";
    }
}

let currentIndex = 0;

function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}
