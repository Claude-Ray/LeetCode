SELECT
    q.id, q.year, IFNULL(n.npv, 0) AS npv
FROM
    Queries AS q
    LEFT JOIN NPV AS n ON n.id = q.id AND n.year = q.year;
