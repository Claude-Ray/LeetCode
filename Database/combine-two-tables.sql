select p.FirstName, p.LastName, a.City, a.State
from Person as p
left join Address as a
on a.PersonId = p.PersonId
