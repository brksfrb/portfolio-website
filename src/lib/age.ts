export const BIRTHDATE = '2008-10-29';
export const AGE_TZ = 'Europe/Istanbul';

export function ageFromBirthdate(
  birthdate: string = BIRTHDATE,
  now: Date = new Date(),
  timeZone: string = AGE_TZ,
): number {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now);
  const num = (type: string) => Number(parts.find((part) => part.type === type)?.value);
  const year = num('year');
  const month = num('month');
  const day = num('day');
  const [birthYear, birthMonth, birthDay] = birthdate.split('-').map(Number);
  let age = year - birthYear;
  if (month < birthMonth || (month === birthMonth && day < birthDay)) age -= 1;
  return age;
}
