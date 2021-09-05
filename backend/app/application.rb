class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/shelters/) && req.get?
      shelters = Shelter.all
      return [200, { 'Content-Type' => 'application/json' }, [ shelters.to_json ]]
    elsif  req.path.match(/dogs/) && req.get?
      dogs = Dog.all
      return [200, { 'Content-Type' => 'application/json' }, [ dogs.to_json ]]
    elsif req.path.match(/dogs/) && req.post?
      data = JSON.parse req.body.read
      dog = Dog.create(data)
      return [200, { 'Content-Type' => 'application/json' }, [ dog.to_json ]]

    elsif req.delete?
      id = req.path_info.split('/dogs/').last 
      dog = Dog.find(id)
      dog.delete?
      return [200, { 'Content-Type' => 'application/json' }, [ message: 'Dog deleted'.to_json ]]
    #elsif req.delete?
      #id = req.path_info.split('/shelters/').last 
      #shelter = Shelter.find(id)
      #shelter.delete?
    else
      resp.write "Path Not Found"

    end
      resp.finish
  end
end
