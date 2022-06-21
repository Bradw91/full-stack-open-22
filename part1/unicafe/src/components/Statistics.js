import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />
      <Statistic text="Bad" value={bad} />
      <Statistic text="All" value={all} />
      <Statistic text="Average" value={average} />
      <Statistic text="Positive" value={positive} />
    </div>
  );
};

export default Statistics;
