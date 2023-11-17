  const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');

    // Initialize the counter value
    let counterValue = 0;

    // Add a click event listener to the Increment button
    incrementBtn.addEventListener('click', () => {
      // Display the un-incremented value in an alert
      alert(`un-incremented value: ${counterValue}`);

      // Increment the counter value
      counterValue++;

      // Update the counter display
      counterElement.textContent = counterValue;
    });
