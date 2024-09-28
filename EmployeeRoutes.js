const express=require('express')
const router=express.Router();
const employeeController=require('../controller/EmployeeController')
const Employee=require('../models/Employee')


router.post("/add-emp",employeeController.createEmployee);
router.get("/get-employees",employeeController.getEmployees);


module.exports=router;