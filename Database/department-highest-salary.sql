SELECT
    department.name AS department,
    employee.name AS employee,
    employee.salary AS salary
FROM
    (
        SELECT
            employee.departmentid,
            max(employee.salary) AS salary
        FROM
            employee
        GROUP BY
            employee.departmentid
    )
        AS highest
    INNER JOIN department ON
            department.id = highest.departmentid
            AND highest.departmentid IS NOT NULL
    INNER JOIN employee ON
            employee.salary = highest.salary
            AND employee.departmentid = department.id
            AND highest.salary IS NOT NULL;
