'use strict';

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
form.elements.email.value = savedState.email || '';
form.elements.message.value = savedState.message || '';

form.addEventListener('input', () => {
    const emailValue = form.elements.email.value.trim();
    const messageValue = form.elements.message.value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email: emailValue, message: messageValue }));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailValue = form.elements.email.value.trim();
    const messageValue = form.elements.message.value.trim();

    if (!emailValue || !messageValue) {
        alert("You must fill out all fields!");
        return;
    }  

    console.log({ email: emailValue, message: messageValue });

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});