function fetchdata() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const students = [
          { name: "Alice", score: 50 },
          { name: "Bob", score: 65 },
          { name: "Charlie", score: 80 },
          { name: "David", score: 45 },
          { name: "Rahul", score: 50 },
        ];
        resolve(students);
      }, 4000);
    });
  }
  
  fetchdata()
    .then((data) => {
      const totalScore = data.reduce((x, y) => x + y.score, 0);
      console.log(`Total score: ${totalScore}`);
    })
    .catch((error) => {
      console.log(error);
    });
  