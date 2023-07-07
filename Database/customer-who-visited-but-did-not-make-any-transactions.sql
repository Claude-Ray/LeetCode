SELECT
    v.customer_id, count(v.customer_id) AS count_no_trans
FROM
    visits AS v
    LEFT JOIN transactions AS t ON t.visit_id = v.visit_id
WHERE
    t.transaction_id IS NULL
GROUP BY
    v.customer_id;

SELECT
    v.customer_id, count(*) AS count_no_trans
FROM
    visits AS v
WHERE
    v.visit_id
    NOT IN (SELECT DISTINCT visit_id FROM transactions)
GROUP BY
    v.customer_id;
