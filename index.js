class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  refs() {
    const container = document.querySelector(this.selector);
    const days = container.querySelector('[data-value="days"]');
    const hours = container.querySelector('[data-value="hours"]');
    const mins = container.querySelector('[data-value="mins"]');
    const secs = container.querySelector('[data-value="secs"]');
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
  targetDate: new Date("nov 15 2021"),
});

timer.start();