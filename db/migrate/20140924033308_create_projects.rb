class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.string :caption
      t.text :description
      t.string :thumbnail

      t.timestamps
    end
  end
end
