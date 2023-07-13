// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
      
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
  }
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
  
    const spielbergMovies = moviesArray.filter(
      movie =>
        movie.director === "Steven Spielberg" &&
        movie.genre.includes("Drama")
    );
  
    return spielbergMovies.length;
  }
  
    
  console.log(howManyMovies(movies)); 
  

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
  
    const totalScores = moviesArray.reduce((total, movie) => {
      if (movie.hasOwnProperty('score')) {
        return total + movie.score;
      }
      return total;
    }, 0);
  
    const totalMovies = moviesArray.length;
  
    const average = totalScores / totalMovies;
    return Math.round(average * 100) / 100; 
  }
  
  
  
  
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
    let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
  return scoresAverage(dramaMovies)
  }
  
  
  
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedArray = moviesArray.slice();
  
    sortedArray.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else {
        
        return a.title.localeCompare(b.title);
      }
    });
  
    return sortedArray;
  }
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let sortedArray = moviesArray.slice();
  
    sortedArray.sort((a, b) => a.title.localeCompare(b.title));
  
    let titles = sortedArray.map(movie => movie.title);
    let top20Titles = titles.slice(0, 20);
  
    return top20Titles;
  }
  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
    let updatedArray = moviesArray.map(movie => {
      let updatedMovie = { ...movie }; 
  
      let duration = updatedMovie.duration;
      let hours = 0;
      let minutes = 0;
  
      if (duration.includes('h')) {
        hours = parseInt(duration.match(/\d+/)[0]);
      }
      if (duration.includes('min')) {
        minutes = parseInt(duration.match(/\d+/)[0]);
      }
  
      updatedMovie.duration = hours * 60 + minutes;
      return updatedMovie;
    });
  
    return updatedArray;
  }
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
      return null;
    }
  
    let yearAverages = {};
  
    for (let movie of moviesArray) {
      let year = movie.year;
      let score = movie.score;
  
      if (year in yearAverages) {
        yearAverages[year].totalScore += score;
        yearAverages[year].count++;
      } else {
        yearAverages[year] = { totalScore: score, count: 1 };
      }
    }
  
    let bestYear = null;
    let bestAverage = -Infinity;
  
    for (let year in yearAverages) {
      let average = yearAverages[year].totalScore / yearAverages[year].count;
  
      if (average > bestAverage || (average === bestAverage && year < bestYear)) {
        bestYear = year;
        bestAverage = average;
      }
    }
  
    return parseInt(bestYear);
  }
  
  
