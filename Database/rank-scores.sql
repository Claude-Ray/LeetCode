SELECT
    score AS score,
    (
        SELECT
            count(*)
        FROM
            (SELECT DISTINCT score FROM scores) AS dscores
        WHERE
            dscores.score >= scores.score
    )
        AS "Rank"
FROM
    scores
ORDER BY
    scores.score DESC;

-- SELECT Score, dense_rank () over (ORDER BY Score DESC) AS "Rank" FROM Scores;
