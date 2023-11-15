// const BadStopWatch = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("BadStopWatch useEffect");
//     setInterval(() => {
//       setCount((v) => v + 0.1);
//     }, 100);
//   }, []);
//   return <div>BadStopWatch : {count.toFixed(1)}</div>;
// };
// const GoodStopWatch = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("GoodStopWatch useEffect");
//     const interval = setInterval(() => {
//       setCount((v) => v + 0.1);
//     }, 100);
//     return () => clearInterval(interval);
//   }, []);
//   return <div>GoodStopWatch : {count.toFixed(1)}</div>;
// };
