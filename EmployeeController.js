const Employee=require('../models/Employee')

const createEmployee=async(req,res)=>{
    try{
        const {name,email,phone,city}=req.body
        const employee=new Employee({
            name,
            email,
            phone,
            city
        })
        await employee.save();
        res.status(201).json({message:"Employee data inserted successfully"})
    }catch(error){
        console.log(error);
        res.status(500).json({message:'server error'})
    }
}

const getEmployees=async(req,res)=>{
    try{
        const employees=await Employee.find();
        res.status(201).json(employees);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"server error"});
    }
}

    
module.exports={createEmployee, getEmployees};
