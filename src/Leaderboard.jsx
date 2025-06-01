import { Link } from "react-router-dom";
import "./Leaderboard.css";
import { useEffect, useState } from "react";

const usernames = ["mihirborkar2004", "chrehall68", "someone2003"];

const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const promises = usernames.map(async (username) => {
        try {
          const res = await fetch(
            `https://leetcode-api-faisalshohag.vercel.app/${username}`,
          );
          const json = await res.json();

          const recentAccepted = (json.recentSubmissions || []).filter(
            (sub) => {
              const date = new Date(parseInt(sub.timestamp) * 1000);
              const submissionDate = date.toISOString().slice(0, 10);
              return (
                sub.statusDisplay === "Accepted" &&
                submissionDate >= "2025-05-31"
              );
            },
          );

          const difficultyMap = {
            "two-sum": "Easy",
            "three-sum": "Medium",
            "valid-parentheses": "Easy",
            "merge-intervals": "Medium",
            "binary-search": "Easy",
            "reverse-linked-list": "Medium",
            "longest-substring-without-repeating-characters": "Medium",
            "maximum-subarray": "Easy",
            "minimum-window-substring": "Hard",
            "serialize-and-deserialize-binary-tree": "Hard",
            "word-ladder": "Hard",
            "climbing-stairs": "Easy",
            "best-time-to-buy-and-sell-stock": "Easy",
            "container-with-most-water": "Medium",
            "word-break": "Medium",
            "n-queens": "Hard",
            "merge-sorted-array": "Easy",
            "search-in-rotated-sorted-array": "Medium",
            "course-schedule": "Medium",
            "maximum-depth-of-binary-tree": "Easy",
            "diameter-of-binary-tree": "Easy",
          };

          const difficultyCount = {
            Easy: 0,
            Medium: 0,
            Hard: 0,
          };

          recentAccepted.forEach((sub) => {
            const difficulty = difficultyMap[sub.titleSlug] || "Medium";
            if (difficultyCount[difficulty] !== undefined) {
              difficultyCount[difficulty]++;
            }
          });

          return {
            username,
            easy: difficultyCount.Easy,
            medium: difficultyCount.Medium,
            hard: difficultyCount.Hard,
            total:
              difficultyCount.Easy +
              difficultyCount.Medium +
              difficultyCount.Hard,
            points: difficultyCount.Easy * 1 + difficultyCount.Medium * 3 + difficultyCount.Hard * 5,
          };
        } catch (err) {
          console.error(`Failed to fetch for ${username}:`, err);
          return {
            username,
            easy: 0,
            medium: 0,
            hard: 0,
            total: 0,
            points: 0,
          };
        }
      });

      const results = await Promise.all(promises);
      results.sort((a, b) => b.points - a.points);
      setData(results);
    };

    fetchAllData();
  }, []);

  return (
    <div className="leaderboard-page">
      <h2>LeetCode Leaderboard (Since 05/31/2025)</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Easy</th>
            <th>Medium</th>
            <th>Hard</th>
            <th>Total Solved</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, idx) => (
            <tr key={idx}>
              <td>
                <Link
                  to={{
                    pathname: `/progress/${user.username}`,
                  }}
                >
                  {user.username}
                </Link>
              </td>
              <td>{user.easy}</td>
              <td>{user.medium}</td>
              <td>{user.hard}</td>
              <td>{user.total}</td>
              <td>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
