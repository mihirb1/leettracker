import './Progress.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Progress = () => {
  const { username } = useParams();
  const [data, setData] = useState(null);
  const [calendarMap, setCalendarMap] = useState({});

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json);

        // Build calendar data
        const solvedByDay = {};
        (json.recentSubmissions || []).forEach((sub) => {
          if (sub.statusDisplay === 'Accepted') {
            const date = new Date(parseInt(sub.timestamp) * 1000);
            const day = date.getDate();
            if (!solvedByDay[day]) solvedByDay[day] = [];
            solvedByDay[day].push(sub.title);
          }
        });
        setCalendarMap(solvedByDay);
      } catch (err) {
        console.error('Failed to fetch data:', err);
      }
    };

    fetchData();
  }, [username]);

  if (!username) {
    return (
      <div className="progress-page">
        <div className="content">
          <div className="widget">
            <h2>No username provided</h2>
            <p>Please return to the login page and enter your LeetCode username.</p>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="progress-page">
        <div className="content">
          <div className="widget">
            <h2>Loading data for {username}...</h2>
          </div>
        </div>
      </div>
    );
  }

const difficultyMap = {
  "3sum": "Medium",
  "add-two-numbers": "Medium",
  "best-time-to-buy-and-sell-stock": "Easy",
  "binary-search": "Easy",
  "binary-tree-level-order-traversal": "Easy",
  "binary-tree-maximum-path-sum": "Hard",
  "binary-tree-right-side-view": "Medium",
  "binary-tree-zigzag-level-order-traversal": "Medium",
  "climbing-stairs": "Medium",
  "coin-change": "Medium",
  "combinations": "Medium",
  "concatenation-of-array": "Easy",
  "construct-binary-tree-from-preorder-and-inorder-traversal": "Medium",
  "container-with-most-water": "Medium",
  "contains-duplicate": "Easy",
  "counting-bits": "Easy",
  "course-schedule": "Medium",
  "decode-ways": "Medium",
  "defanging-an-ip-address": "Easy",
  "easy-problem-1": "Easy",
  "easy-problem-10": "Easy",
  "easy-problem-100": "Easy",
  "easy-problem-101": "Easy",
  "easy-problem-102": "Easy",
  "easy-problem-103": "Easy",
  "easy-problem-104": "Easy",
  "easy-problem-105": "Easy",
  "easy-problem-106": "Easy",
  "easy-problem-107": "Easy",
  "easy-problem-108": "Easy",
  "easy-problem-109": "Easy",
  "easy-problem-11": "Easy",
  "easy-problem-110": "Easy",
  "easy-problem-111": "Easy",
  "easy-problem-112": "Easy",
  "easy-problem-113": "Easy",
  "easy-problem-114": "Easy",
  "easy-problem-115": "Easy",
  "easy-problem-116": "Easy",
  "easy-problem-117": "Easy",
  "easy-problem-118": "Easy",
  "easy-problem-119": "Easy",
  "easy-problem-12": "Easy",
  "easy-problem-120": "Easy",
  "easy-problem-13": "Easy",
  "easy-problem-14": "Easy",
  "easy-problem-15": "Easy",
  "easy-problem-16": "Easy",
  "easy-problem-17": "Easy",
  "easy-problem-18": "Easy",
  "easy-problem-19": "Easy",
  "easy-problem-2": "Easy",
  "easy-problem-20": "Easy",
  "easy-problem-21": "Easy",
  "easy-problem-22": "Easy",
  "easy-problem-23": "Easy",
  "easy-problem-24": "Easy",
  "easy-problem-25": "Easy",
  "easy-problem-26": "Easy",
  "easy-problem-27": "Easy",
  "easy-problem-28": "Easy",
  "easy-problem-29": "Easy",
  "easy-problem-3": "Easy",
  "easy-problem-30": "Easy",
  "easy-problem-31": "Easy",
  "easy-problem-32": "Easy",
  "easy-problem-33": "Easy",
  "easy-problem-34": "Easy",
  "easy-problem-35": "Easy",
  "easy-problem-36": "Easy",
  "easy-problem-37": "Easy",
  "easy-problem-38": "Easy",
  "easy-problem-39": "Easy",
  "easy-problem-4": "Easy",
  "easy-problem-40": "Easy",
  "easy-problem-41": "Easy",
  "easy-problem-42": "Easy",
  "easy-problem-43": "Easy",
  "easy-problem-44": "Easy",
  "easy-problem-45": "Easy",
  "easy-problem-46": "Easy",
  "easy-problem-47": "Easy",
  "easy-problem-48": "Easy",
  "easy-problem-49": "Easy",
  "easy-problem-5": "Easy",
  "easy-problem-50": "Easy",
  "easy-problem-51": "Easy",
  "easy-problem-52": "Easy",
  "easy-problem-53": "Easy",
  "easy-problem-54": "Easy",
  "easy-problem-55": "Easy",
  "easy-problem-56": "Easy",
  "easy-problem-57": "Easy",
  "easy-problem-58": "Easy",
  "easy-problem-59": "Easy",
  "easy-problem-6": "Easy",
  "easy-problem-60": "Easy",
  "easy-problem-61": "Easy",
  "easy-problem-62": "Easy",
  "easy-problem-63": "Easy",
  "easy-problem-64": "Easy",
  "easy-problem-65": "Easy",
  "easy-problem-66": "Easy",
  "easy-problem-67": "Easy",
  "easy-problem-68": "Easy",
  "easy-problem-69": "Easy",
  "easy-problem-7": "Easy",
  "easy-problem-70": "Easy",
  "easy-problem-71": "Easy",
  "easy-problem-72": "Easy",
  "easy-problem-73": "Easy",
  "easy-problem-74": "Easy",
  "easy-problem-75": "Easy",
  "easy-problem-76": "Easy",
  "easy-problem-77": "Easy",
  "easy-problem-78": "Easy",
  "easy-problem-79": "Easy",
  "easy-problem-8": "Easy",
  "easy-problem-80": "Easy",
  "easy-problem-81": "Easy",
  "easy-problem-82": "Easy",
  "easy-problem-83": "Easy",
  "easy-problem-84": "Easy",
  "easy-problem-85": "Easy",
  "easy-problem-86": "Easy",
  "easy-problem-87": "Easy",
  "easy-problem-88": "Easy",
  "easy-problem-89": "Easy",
  "easy-problem-9": "Easy",
  "easy-problem-90": "Easy",
  "easy-problem-91": "Easy",
  "easy-problem-92": "Easy",
  "easy-problem-93": "Easy",
  "easy-problem-94": "Easy",
  "easy-problem-95": "Easy",
  "easy-problem-96": "Easy",
  "easy-problem-97": "Easy",
  "easy-problem-98": "Easy",
  "easy-problem-99": "Easy",
  "edit-distance": "Hard",
  "excel-sheet-column-title": "Easy",
  "find-all-anagrams-in-a-string": "Medium",
  "find-the-duplicate-number": "Medium",
  "first-missing-positive": "Hard",
  "flatten-binary-tree-to-linked-list": "Medium",
  "flood-fill": "Easy",
  "group-anagrams": "Medium",
  "happy-number": "Easy",
  "house-robber": "Medium",
  "house-robber-ii": "Medium",
  "implement-queue-using-stacks": "Easy",
  "intersection-of-two-arrays": "Easy",
  "invert-binary-tree": "Easy",
  "jump-game": "Medium",
  "kids-with-the-greatest-number-of-candies": "Easy",
  "kth-largest-element-in-an-array": "Medium",
  "largest-rectangle-in-histogram": "Hard",
  "letter-case-permutation": "Medium",
  "letter-combinations-of-a-phone-number": "Medium",
  "linked-list-cycle": "Easy",
  "longest-common-prefix": "Easy",
  "longest-substring-without-repeating-characters": "Medium",
  "longest-valid-parentheses": "Hard",
  "lowest-common-ancestor-of-a-binary-search-tree": "Easy",
  "lowest-common-ancestor-of-a-binary-tree": "Medium",
  "majority-element": "Easy",
  "maximal-rectangle": "Hard",
  "maximum-depth-of-binary-tree": "Easy",
  "maximum-length-of-a-subarray-with-positive-product": "Medium",
  "maximum-product-of-two-elements-in-an-array": "Easy",
  "maximum-subarray": "Easy",
  "maximum-subarray-sum-with-one-deletion": "Medium",
  "median-of-two-sorted-arrays": "Hard",
  "medium-problem-1": "Medium",
  "medium-problem-10": "Medium",
  "medium-problem-11": "Medium",
  "medium-problem-12": "Medium",
  "medium-problem-13": "Medium",
  "medium-problem-14": "Medium",
  "medium-problem-15": "Medium",
  "medium-problem-16": "Medium",
  "medium-problem-17": "Medium",
  "medium-problem-18": "Medium",
  "medium-problem-19": "Medium",
  "medium-problem-2": "Medium",
  "medium-problem-20": "Medium",
  "medium-problem-21": "Medium",
  "medium-problem-22": "Medium",
  "medium-problem-23": "Medium",
  "medium-problem-24": "Medium",
  "medium-problem-25": "Medium",
  "medium-problem-26": "Medium",
  "medium-problem-27": "Medium",
  "medium-problem-28": "Medium",
  "medium-problem-29": "Medium",
  "medium-problem-3": "Medium",
  "medium-problem-30": "Medium",
  "medium-problem-31": "Medium",
  "medium-problem-32": "Medium",
  "medium-problem-33": "Medium",
  "medium-problem-34": "Medium",
  "medium-problem-35": "Medium",
  "medium-problem-36": "Medium",
  "medium-problem-37": "Medium",
  "medium-problem-38": "Medium",
  "medium-problem-39": "Medium",
  "medium-problem-4": "Medium",
  "medium-problem-40": "Medium",
  "medium-problem-41": "Medium",
  "medium-problem-42": "Medium",
  "medium-problem-43": "Medium",
  "medium-problem-44": "Medium",
  "medium-problem-45": "Medium",
  "medium-problem-46": "Medium",
  "medium-problem-47": "Medium",
  "medium-problem-48": "Medium",
  "medium-problem-49": "Medium",
  "medium-problem-5": "Medium",
  "medium-problem-50": "Medium",
  "medium-problem-51": "Medium",
  "medium-problem-52": "Medium",
  "medium-problem-53": "Medium",
  "medium-problem-54": "Medium",
  "medium-problem-55": "Medium",
  "medium-problem-56": "Medium",
  "medium-problem-57": "Medium",
  "medium-problem-58": "Medium",
  "medium-problem-59": "Medium",
  "medium-problem-6": "Medium",
  "medium-problem-60": "Medium",
  "medium-problem-61": "Medium",
  "medium-problem-62": "Medium",
  "medium-problem-63": "Medium",
  "medium-problem-64": "Medium",
  "medium-problem-65": "Medium",
  "medium-problem-66": "Medium",
  "medium-problem-67": "Medium",
  "medium-problem-68": "Medium",
  "medium-problem-69": "Medium",
  "medium-problem-7": "Medium",
  "medium-problem-70": "Medium",
  "medium-problem-71": "Medium",
  "medium-problem-72": "Medium",
  "medium-problem-73": "Medium",
  "medium-problem-74": "Medium",
  "medium-problem-75": "Medium",
  "medium-problem-76": "Medium",
  "medium-problem-77": "Medium",
  "medium-problem-78": "Medium",
  "medium-problem-79": "Medium",
  "medium-problem-8": "Medium",
  "medium-problem-80": "Medium",
  "medium-problem-9": "Medium",
  "merge-k-sorted-lists": "Hard",
  "merge-sorted-array": "Easy",
  "merge-two-sorted-lists": "Easy",
  "minimum-number-of-arrows-to-burst-balloons": "Hard",
  "minimum-path-sum": "Medium",
  "minimum-window-substring": "Medium",
  "missing-number": "Easy",
  "move-zeroes": "Easy",
  "number-of-islands": "Medium",
  "number-of-steps-to-reduce-a-number-to-zero": "Easy",
  "palindrome-number": "Easy",
  "palindrome-partitioning-ii": "Hard",
  "palindromic-substrings": "Medium",
  "partition-equal-subset-sum": "Medium",
  "path-sum": "Easy",
  "permutations": "Medium",
  "plus-one": "Easy",
  "power-of-three": "Easy",
  "ransom-note": "Easy",
  "regular-expression-matching": "Hard",
  "remove-duplicates-from-sorted-array": "Easy",
  "remove-nth-node-from-end-of-list": "Medium",
  "reverse-nodes-in-k-group": "Hard",
  "richest-customer-wealth": "Easy",
  "roman-to-integer": "Easy",
  "rotate-image": "Medium",
  "rotting-oranges": "Medium",
  "same-tree": "Easy",
  "search-a-2d-matrix": "Medium",
  "search-in-rotated-sorted-array": "Medium",
  "serialize-and-deserialize-binary-tree": "Hard",
  "set-matrix-zeroes": "Medium",
  "shuffle-the-array": "Easy",
  "single-number": "Easy",
  "sliding-window-maximum": "Hard",
  "sort-colors": "Medium",
  "spiral-matrix": "Medium",
  "spiral-matrix-ii": "Medium",
  "subarray-sum-equals-k": "Medium",
  "symmetric-tree": "Easy",
  "task-scheduler": "Medium",
  "to-lower-case": "Easy",
  "top-k-frequent-elements": "Medium",
  "trapping-rain-water": "Hard",
  "two-sum": "Easy",
  "unique-paths": "Medium",
  "unique-paths-ii": "Medium",
  "valid-anagram": "Easy",
  "valid-parentheses": "Easy",
  "validate-binary-search-tree": "Medium",
  "wildcard-matching": "Hard",
  "word-break": "Medium",
  "word-ladder": "Hard"
};
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth(); // 0-based
const today = now.getDate();

const recentAccepted = (data.recentSubmissions || []).filter(sub => {
  const date = new Date(parseInt(sub.timestamp) * 1000);
  return (
    sub.statusDisplay === 'Accepted' &&
    date.getFullYear() === currentYear &&
    date.getMonth() === currentMonth &&
    date.getDate() <= today // ✅ avoid future days
  );
});

  const countByDifficulty = {
    Easy: 0,
    Medium: 0,
    Hard: 0,
  };

  recentAccepted.forEach(sub => {
    const difficulty = difficultyMap[sub.titleSlug] || 'Medium'; // default
    if (countByDifficulty[difficulty] !== undefined) {
      countByDifficulty[difficulty]++;
    }
  });

  return (
    <div className="progress-page">
      <div className="content">
        <div className="widget-container">
          <div className="widget">
            <h2>{username}'s LeetCode Stats</h2>
            <p><strong>Total Solved:</strong> {data.totalSolved ?? 'N/A'}</p>
            <p><strong>Ranking:</strong> {data.ranking ?? 'N/A'}</p>
            <p><strong>Reputation:</strong> {data.reputation ?? 'N/A'}</p>
            <p><strong>Contribution Points:</strong> {data.contributionPoint ?? 'N/A'}</p>

            <h3 className="section-title">Solved by Difficulty</h3>
            <ul className="difficulty-list">
              <li><strong>Easy:</strong> {data.easySolved} / {data.totalEasy}</li>
              <li><strong>Medium:</strong> {data.mediumSolved} / {data.totalMedium}</li>
              <li><strong>Hard:</strong> {data.hardSolved} / {data.totalHard}</li>
            </ul>
          </div>

          <div className="widget">
            <h3 className="recent-title">Recently Solved</h3>
            <p>
              <strong>Easy:</strong> {countByDifficulty.Easy} &nbsp;
              <strong>Medium:</strong> {countByDifficulty.Medium} &nbsp;
              <strong>Hard:</strong> {countByDifficulty.Hard}
            </p>
            {recentAccepted.length === 0 ? (
              <p>No accepted problems since yesterday.</p>
            ) : (
              <ul className="recent-list">
                {recentAccepted.map((sub, idx) => {
                  const date = new Date(parseInt(sub.timestamp) * 1000);
                  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
                  const difficulty = difficultyMap[sub.titleSlug] || 'Medium';
                  const colorClass = difficulty === 'Easy' ? 'easy' : difficulty === 'Hard' ? 'hard' : 'medium';

                  return (
                    <li key={idx}>
                      <a
                        href={`https://leetcode.com/problems/${sub.titleSlug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {sub.title}
                      </a>
                      <span className={`recent-meta ${colorClass}`}>
                        &nbsp;• {difficulty} • {formattedDate}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        {/* Calendar Widget */}
        <div className="widget calendar-widget">
          <h3 className="section-title">Solved Calendar (This Month)</h3>
          <div className="calendar-grid">
            {[...Array(31).keys()].map(day => {
              const date = day + 1;
              return (
                <div key={date} className="calendar-cell">
                  <strong>{date}</strong>
                  <ul>
                    {(calendarMap[date] || []).map((title, idx) => (
                      <li key={idx} style={{ fontSize: '0.8rem' }}>{title}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;