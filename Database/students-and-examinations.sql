SELECT
    s.student_id,
    s.student_name,
    sub.subject_name,
    count(e.subject_name) AS attended_exams
FROM
    students AS s
    CROSS JOIN subjects AS sub
    LEFT JOIN examinations AS e ON
            s.student_id = e.student_id
            AND e.subject_name = sub.subject_name
GROUP BY
    s.student_id, sub.subject_name
ORDER BY
    s.student_id, sub.subject_name;
