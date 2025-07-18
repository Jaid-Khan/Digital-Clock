    const timeEl = document.getElementById("time");
    const dateEl = document.getElementById("date");
    const monthEl = document.getElementById("month");
    const yearEl = document.getElementById("year");

    function updateClock() {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      timeEl.textContent = `${hrs}:${mins}:${secs}`;

      const day = String(now.getDate()).padStart(2, '0');
      const month = now.toLocaleString('default', { month: 'long' }); // e.g., July
      const year = now.getFullYear();

      dateEl.textContent = day;
      monthEl.textContent = month;
      yearEl.textContent = year;
    }

    updateClock(); 
    setInterval(updateClock, 1000);