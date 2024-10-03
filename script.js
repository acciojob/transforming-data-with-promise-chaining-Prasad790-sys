//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function() {
    const inputNumber = parseFloat(document.getElementById("ip").value);
    const output = document.getElementById("output");

    // Check if the input is a valid number
    if (isNaN(inputNumber)) {
        output.textContent = "Please enter a valid number.";
        return;
    }

    // Step 1: Create a promise that resolves with the input number after 2 seconds
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(inputNumber);
        }, 2000);
    })
    .then((number) => {
        output.textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(number * 2); // Multiply by 2
            }, 1000);
        });
    })
    .then((number) => {
        output.textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(number - 3); // Subtract 3
            }, 1000);
        });
    })
    .then((number) => {
        output.textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(number / 2); // Divide by 2
            }, 1000);
        });
    })
    .then((number) => {
        output.textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(number + 10); // Add 10
            }, 1000);
        });
    })
    .then((number) => {
        output.textContent = `Final Result: ${number}`; // Display final result
    })
    .catch((error) => {
        output.textContent = `Error: ${error}`;
    });
});