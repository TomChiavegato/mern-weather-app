import Left from "./Left";
import Right from "./Right";

export default function Main({ data = null }) {
  return (
    <main className="main">
      {data == "" ? (
        <>
          <Left />
          <Right />
        </>
      ) : (
        <>
          <Left
            current={data.current}
            today={data.forecast.forecastday[0]}
            location={data.location}
          />
          <Right forecast={data.forecast} />
        </>
      )}
    </main>
  );
}
