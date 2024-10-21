function task(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        },delay);
    });
}

task("First Task Completed", 1000)
    .then(() => task("Second Task Completed", 2000))
    .then(() => task("Third Task Completed", 3000))
    .then(() => task("Fourth Task Completed", 4000));