SELECT
    user_id,
    round(IFNULL(avg(action = 'confirmed'), 0), 2)
        AS confirmation_rate
FROM
    signups AS s
    LEFT JOIN confirmations AS c USING (user_id)
GROUP BY
    s.user_id;
