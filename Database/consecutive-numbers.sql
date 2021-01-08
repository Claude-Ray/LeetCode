SELECT
    DISTINCT l1.num AS consecutivenums
FROM
    logs AS l1
    INNER JOIN logs AS l2 ON
            l1.num = l2.num AND l1.id + 1 = l2.id
    INNER JOIN logs AS l3 ON
            l1.num = l3.num AND l2.id + 1 = l3.id;
