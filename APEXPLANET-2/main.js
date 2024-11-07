document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    document.getElementById('contact').style.display = 'none';
    document.getElementById('imageSection').style.display = 'block';
});

document.getElementById('imageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const imageUrl = document.getElementById('imageUrl').value.trim();
    
    if (isValidImageUrl(imageUrl)) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Submitted Space Image';
        img.style.maxWidth = '100%';  
        img.style.height = 'auto';    

        img.onload = function() {
            document.getElementById('imagePreview').innerHTML = '';  
            document.getElementById('imagePreview').appendChild(img);
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove Image';
            removeButton.style.marginTop = '10px';
            removeButton.addEventListener('click', function() {
                removeImage();
            });
            document.getElementById('imagePreview').appendChild(removeButton);
        };

        img.onerror = function() {
            alert('This image could not be loaded. Please check the URL.');
        };
    } else {
        alert('Please enter a valid image URL.');
    }
});

function isValidImageUrl(url) {
    return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url);
}

function removeImage() {
    document.getElementById('imagePreview').innerHTML = '';
    document.getElementById('imageUrl').value = '';
}
// JavaScript for adding and removing tasks in the To-Do List
document.getElementById("addTodoBtn").addEventListener("click", function() {
    const todoInput = document.getElementById("todoInput");
    const task = todoInput.value.trim();

    if (task !== "") {
        const li = document.createElement("li");

        // Create task text
        const taskText = document.createElement("span");
        taskText.textContent = task;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.classList.add("remove-btn");

        // Attach event to remove button
        removeBtn.addEventListener("click", function() {
            li.remove();
        });

        // Append task text and remove button to the list item
        li.appendChild(taskText);
        li.appendChild(removeBtn);

        // Append the list item to the to-do list
        document.getElementById("todoList").appendChild(li);
        todoInput.value = ""; // Clear the input after adding the task
    }
});
