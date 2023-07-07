SELECT
    player_id, device_id
FROM
    activity
WHERE
    (player_id, event_date)
    IN (
            SELECT
                player_id, min(event_date)
            FROM
                activity
            GROUP BY
                player_id
        );
