# DELETE p1 FROM Person AS p1, Person AS p2 WHERE p1.email = p2.email AND p1.id > p2.id;
DELETE FROM
    person
WHERE
    id
    NOT IN (
            SELECT
                id
            FROM
                (
                    SELECT
                        min(id) AS id
                    FROM
                        person
                    GROUP BY
                        email
                )
                    AS p
        );
