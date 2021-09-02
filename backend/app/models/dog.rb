class Dog < ActiveRecord::Base
    belongs_to :shelter

    def hello
        return "Hello my name is #{self.name}, I am a #{self.breed}!"
    end

end