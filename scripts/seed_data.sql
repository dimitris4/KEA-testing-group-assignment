-- mock
-- const GRADES: IGrade[]  = [
--   { nGradeID: 1, cDenmark: '12', cUSA: 'A+' },
--   { nGradeID: 2, cDenmark: '10', cUSA: 'A' },
--   { nGradeID: 3, cDenmark: '7', cUSA: 'B' },
--   { nGradeID: 4, cDenmark: '4', cUSA: 'C' },
--   { nGradeID: 5, cDenmark: '02', cUSA: 'D' },
--   { nGradeID: 6, cDenmark: '00', cUSA: 'F' },
--   { nGradeID: 7, cDenmark: '-3', cUSA: 'F' },
-- ];

INSERT INTO `my_schema`.`grades` (`nGradeID`, `cDenmark`, `cUSA`) 
VALUES 
  (1, '12', 'A+'),
  (2, '10', 'A'),
  (3, '7', 'B'),
  (4, '4', 'C'),
  (5, '02', 'D'),
  (6, '00', 'F'),
  (7, '-3', 'F')
;