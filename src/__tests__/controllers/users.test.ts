import { mockRequest, mockResponse } from "../../__mocks__"
import { getUsers } from "../../controllers/users"

describe('getUsers',()=>{
    it('should return all users',()=>{
       getUsers(mockRequest , mockResponse)

       
       expect(mockResponse.json).toHaveBeenCalledWith([])
    })
})