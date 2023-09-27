export default function CalendarIcon({ color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 4C8.75 4 9 4.25 9 4.5V6H15V4.5C15 4.25 15.2188 4 15.5 4C15.75 4 16 4.25 16 4.5V6H17C18.0938 6 19 6.90625 19 8V18C19 19.125 18.0938 20 17 20H7C5.875 20 5 19.125 5 18V8C5 6.90625 5.875 6 7 6H8V4.5C8 4.25 8.21875 4 8.5 4ZM18 10H14.75V12.25H18V10ZM18 13.25H14.75V15.75H18V13.25ZM18 16.75H14.75V19H17C17.5312 19 18 18.5625 18 18V16.75ZM13.75 15.75V13.25H10.25V15.75H13.75ZM10.25 19H13.75V16.75H10.25V19ZM9.25 15.75V13.25H6V15.75H9.25ZM6 16.75V18C6 18.5625 6.4375 19 7 19H9.25V16.75H6ZM6 12.25H9.25V10H6V12.25ZM10.25 12.25H13.75V10H10.25V12.25ZM17 7H7C6.4375 7 6 7.46875 6 8V9H18V8C18 7.46875 17.5312 7 17 7Z"
        fill={color}
      />
    </svg>
  );
}