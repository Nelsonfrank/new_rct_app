//dependencies

import moment from 'moment';

/**
 * Message time formating f(x)
 * @name formatDate
 * @param date
 */
export function formatDate(date: Date) {
  const h = '0' + date.getHours();
  const m = '0' + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

export function checkTimeExpired(time: string) {
  console.log(time);

  return moment().isSameOrBefore(time);
}

export function expireTimeCountDown(dateTimeString: string) {
  let distance = 0;
  const countDownDate = new Date(dateTimeString).getTime();

  // Update the count down every 1 second
  const timeInterval = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / 1000);
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { minutes, seconds };
  }, 1000);

  if (distance < 0) {
    clearInterval(timeInterval);
    return 'expired';
  }
}

export const checkAdminUserRole = (roles: any) => {
  return roles.some((element: { role: string }) => element.role === 'leader');
};
