/**
 * @param {string} homepage
 */

class BrowserHistory {
  constructor(homepage) {
    this.history = [homepage];
    this.currentIndex = 0;
  }

  visit(url) {
    this.history = this.history.slice(0, this.currentIndex + 1);
    // 현재 위치까지 자른다.
    this.history.push(url);
    this.currentIndex++;
  }
  back(steps) {
    this.currentIndex = Math.max(0, this.currentIndex - steps);
    return this.history[this.currentIndex];
  }
  forward(steps) {
    this.currentIndex = Math.min(
      this.history.length - 1,
      this.currentIndex + steps
    );
    return this.history[this.currentIndex];
  }
}

const browserHistory = new BrowserHistory("google.com");
browserHistory.visit("facebook.com");
browserHistory.visit("youtube.com");
console.log(browserHistory.back(1));
console.log(browserHistory.back(1));
console.log(browserHistory.forward(1));
browserHistory.visit("linkedin.com");
console.log(browserHistory.forward(2));
console.log(browserHistory.back(2));
console.log(browserHistory.back(1));
