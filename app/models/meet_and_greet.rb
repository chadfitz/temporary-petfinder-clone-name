# == Schema Information
#
# Table name: meet_and_greets
#
#  id         :bigint           not null, primary key
#  start_time :time             not null
#  date       :date             not null
#  user_id    :bigint           not null
#  animal_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class MeetAndGreet < ApplicationRecord
  validates_time :start_time, between: ["9:00am", "5:00pm"]
  validates_date :date, after: Date.today

  belongs_to :user
  belongs_to :animal
end
