class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.container = document.querySelector(this.selector);
    this.days = this.container.querySelector('[data-value="days"]');
    this.hours = this.container.querySelector('[data-value="hours"]');
    this.mins = this.container.querySelector('[data-value="mins"]');
    this.secs = this.container.querySelector('[data-value="secs"]');
  }

  refs() {
    const days = this.days;
    const hours = this.hours;
    const mins = this.mins;
    const secs = this.secs;
    return { days, hours, mins, secs, };
  };

  setTime({ days, hours, mins, secs }) {
    if (this.targetDate > Date.now()) {
      const time = this.targetDate - Date.now();
    days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    mins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    }
    return;
  };

  pad(value) {
    return String(value).padStart(2, "0");
  }

  start() {
    setInterval(() => {
      this.setTime(this.refs())
    })
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("nov 15 2023"),
});

timer.start();
