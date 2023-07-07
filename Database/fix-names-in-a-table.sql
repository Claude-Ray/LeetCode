SELECT
    user_id,
    concat(
        upper(substring(name, 1, 1)),
        lower(substring(name, 2, 40))
    )
        AS name
FROM
    users
ORDER BY
    user_id;
