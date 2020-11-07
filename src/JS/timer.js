class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            mins: document.querySelector('[data-value="mins"]'),
            secs: document.querySelector('[data-value="secs"]'),
        };
        this.intervalId = null;
        this.isActive = false;
    }

    start() {
        if (this.isActive) { return; }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;
            const timeLefl = this.getTimeComponents(time);
            this.updateTimer(timeLefl);
            
        }, 1000)
    } 
        
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    }

    updateTimer({ days, hours, mins, secs }) {
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
    }
    
    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, secs};
    };
    
    pad(number) {
    return String(number).padStart(2, '0');
 };
    
}




const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('11 15, 2020'),
});


timer1.start();


const year = document.querySelector('#year');
const month = document.querySelector('#month');
const day = document.querySelector('#day');
console.log(year.value, month.value, day.value,);