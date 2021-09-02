class Shelter < ActiveRecord::Base
    has_many :dogs

    def dog_names
        self.dogs.map do |dog|
            dog.name
        end
    
    end
    
end
