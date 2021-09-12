class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/shelters/) && req.get?
      shelters = Shelter.all
      shelters_with_dog = shelters.map do |shelter| 
      {id: shelter.name, phone_number: shelter.phone_number, location: shelter.location}
      end
      return [200, { 'Content-Type' => 'application/json' }, [ shelters_with_dog.to_json ]]
    elsif  req.path.match(/dogs/) && req.get?
      dogs = Dog.all
      new_dogs = dogs.map do |dog|
        {
          id: dog.id,
          name: dog.name,
          breed: dog.breed,
          age: dog.age,
          shelter: dog.shelter,
          img_url: dog.img_url
        }
      end
      return [200, { 'Content-Type' => 'application/json' }, [ new_dogs.to_json ]]
    elsif req.path.match(/dogs/) && req.post?
      data = JSON.parse req.body.read
      puts data
      dog = Dog.create(data)
      dog.shelter_id = 1
      dog.save
      return [200, { 'Content-Type' => 'application/json' }, [ dog.to_json ]]
    elsif req.delete?
      id = req.path_info.split('/dogs/').last 
      dog = Dog.find(id)
      dog.delete
      return [200, { 'Content-Type' => 'application/json' }, [ {message: 'Dog deleted'}.to_json ]]
    
    else
      resp.write "Path Not Found"

    end
      resp.finish
  end
end
