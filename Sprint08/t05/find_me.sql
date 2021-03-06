USE ucode_web;

SELECT heroes.name FROM heroes 
INNER JOIN teams ON heroes.id = teams.hero_id
WHERE race != 'human' AND heroes.name LIKE BINARY '%a%' AND class_role = 'healer' or class_role = 'tankman'
GROUP BY teams.hero_id HAVING COUNT(teams.hero_id) > 1
ORDER BY heroes.id ASC LIMIT 1;