SELECT
    p.product_id,
    round(sum(p.price * u.units) / sum(u.units), 2)
        AS average_price
FROM
    prices AS p, unitssold AS u
WHERE
    p.product_id = u.product_id
    AND u.purchase_date BETWEEN p.start_date AND p.end_date
GROUP BY
    p.product_id;
