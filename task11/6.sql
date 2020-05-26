SELECT USER.NAME, U.COUNT FROM USER 
LEFT JOIN
(SELECT USER.ID, USER.NAME, POST.created_at AS my_date, COUNT(*) 
AS COUNT 
FROM POST
INNER JOIN USER
ON POST.USER_ID = USER.ID
WHERE DATE(POST.CREATED_AT) = '2020-03-01'
GROUP BY NAME) AS U
ON U.ID = USER.ID;